<template>
  <div
    class="max-w-3xl mx-auto mt-5 p-4 sm:p-6 text-center dark:bg-black/95 dark:text-white/90"
  >
    <h1 class="text-3xl font-bold mb-6">國小數學運算練習系統</h1>

    <div class="space-y-6">
      <!-- 按鈕區塊：暗黑與列印 -->
      <div
        class="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2"
      >
        <button
          @click="toggleDarkMode"
          class="w-full sm:w-auto px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <span v-if="darkMode">🌞 切換光照模式</span>
          <span v-else>🌙 切換深色模式</span>
        </button>

        <button
          v-if="started && !submitted"
          @click="printQuestions"
          class="w-full sm:w-auto px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          🖨️ 列印題目
        </button>
      </div>

      <!-- 選項設定區 -->
      <div v-if="!started" class="space-y-6 text-left">
        <div>
          <label class="block font-semibold mb-1">選擇練習項目：</label>
          <select
            v-model="operation"
            class="w-full border p-2 rounded dark:bg-gray-800 dark:border-gray-600"
          >
            <option value="+">加法</option>
            <option value="-">減法</option>
            <option value="*">乘法</option>
            <option value="/">除法</option>
          </select>
        </div>

        <div
          class="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0"
        >
          <div class="font-semibold min-w-[100px]">難度等級：</div>
          <select
            v-model.number="digitLevel"
            class="w-full sm:w-auto border p-2 rounded dark:bg-gray-800 dark:border-gray-600"
          >
            <option :value="1">🐣 1位數</option>
            <option :value="2">🐥 1~2位數</option>
            <option :value="3">✨ 2~3位數</option>
            <option :value="4">🚀 3~4位數</option>
            <option :value="5">🌟 4~5位數</option>
            <option :value="6">🔥 2~7位數（高手挑戰）</option>
          </select>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            出題範圍：{{ digitMin }} 位數 ～ {{ digitMax }} 位數
          </p>
        </div>

        <div
          class="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0"
        >
          <label class="font-semibold sm:flex-shrink-0"
            >題目數量（3～50）：</label
          >
          <input
            type="number"
            v-model.number="questionCount"
            min="3"
            max="50"
            class="flex-1 border p-2 rounded dark:bg-gray-800 dark:border-gray-600"
          />
        </div>

        <button
          @click="startQuiz"
          class="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 text-lg"
        >
          開始練習
        </button>
      </div>
      <!-- 題目區 -->
      <div v-else class="space-y-4 text-left">
        <div
          v-for="(q, index) in questions"
          :key="index"
          class="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2"
        >
          <span>{{ index + 1 }}.</span>
          <span>{{ q.a }} {{ formatOperator(q.op) }} {{ q.b }} =</span>
          <input
            type="number"
            v-model="q.userAnswer"
            :disabled="submitted"
            class="w-full sm:w-24 p-2 text-base border rounded dark:bg-gray-800 dark:border-gray-600"
          />
          <span
            v-if="submitted"
            :class="q.correct ? 'text-green-500' : 'text-red-500'"
          >
            （{{ q.correct ? "正確" : "錯誤" }}，答案：{{ q.answer }}）
          </span>
        </div>

        <!-- 作答控制按鈕 -->
        <div class="flex flex-col sm:flex-row justify-end gap-2 mt-4">
          <button
            v-if="!submitted"
            @click="endQuiz"
            class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            結束練習
          </button>
          <button
            @click="restart"
            class="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            {{ !submitted ? "重新選擇練習項目" : "重新開始" }}
          </button>
        </div>

        <!-- 結果 -->
        <div v-if="submitted" class="mt-4">
          <h3 class="text-xl font-bold">批改結果：</h3>
          <p>正確 {{ correctCount }} / {{ questions.length }} 題</p>
          <p>作答時間：{{ formatTime(elapsedTime) }}</p>
        </div>
      </div>

      <!-- 歷史紀錄 -->
      <div class="mt-6">
        <h2 class="text-2xl font-bold mb-4">最近 10 筆紀錄</h2>
        <ul class="space-y-2 text-left">
          <li
            v-for="(record, index) in history"
            :key="index"
            class="p-4 border rounded dark:bg-gray-800"
          >
            <p><strong>日期：</strong>{{ record.date }}</p>
            <p><strong>運算方式：</strong>{{ record.operation }}</p>
            <p>
              <strong>正確數量：</strong>{{ record.correct }} /
              {{ record.total }}
              <strong
                v-if="record.correct === record.total"
                class="text-yellow-500"
                >🏅 100 分！</strong
              >
            </p>
            <p><strong>時間：</strong>{{ formatTime(record.time) }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

// ====== 響應式資料 ======
const operation = ref("+");
const digitLevel = ref(2);
const questionCount = ref(5);
const questions = ref<any[]>([]);
const started = ref(false);
const submitted = ref(false);
const timer = ref<number | null>(null);
const startTime = ref<number | null>(null);
const elapsedTime = ref(0);
const darkMode = ref(false);
const history = ref<any[]>([]);

// ====== computed ======
const digitMin = computed(() => {
  return [1, 1, 2, 3, 4, 2][digitLevel.value - 1] || 1;
});

const digitMax = computed(() => {
  return [1, 2, 3, 4, 5, 7][digitLevel.value - 1] || 2;
});

const correctCount = computed(() => {
  return questions.value.filter((q) => q.correct).length;
});
// ====== 工具函式 ======
const formatOperator = (op: string) => {
  switch (op) {
    case "*":
      return "x";
    case "/":
      return "÷";
    default:
      return op;
  }
};

const generateNumber = (digits: number): number => {
  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createQuestion = () => {
  let a = generateNumber(digitMin.value);
  let b = generateNumber(digitMax.value);
  const op = operation.value;

  if (op === "/") {
    while (b === 0) b = generateNumber(digitMax.value);
    a = b * generateNumber(digitMin.value);
  }

  if (op === "-" && a < b) [a, b] = [b, a];

  const answer = {
    "+": a + b,
    "-": a - b,
    "*": a * b,
    "/": a / b,
  }[op];

  if (answer === 0 || answer === 1) return createQuestion();

  return { a, b, op, answer, userAnswer: null, correct: false };
};

const startQuiz = () => {
  if (questionCount.value < 3 || questionCount.value > 50) {
    alert("題目數量需介於 3 到 50 題！");
    return;
  }
  questions.value = Array.from({ length: questionCount.value }, () =>
    createQuestion()
  );
  started.value = true;
  submitted.value = false;
  elapsedTime.value = 0;
  startTimer();
};

const endQuiz = () => {
  questions.value.forEach((q) => {
    q.correct = Number(q.userAnswer) === q.answer;
  });
  submitted.value = true;
  stopTimer();

  history.value.unshift({
    date: new Date().toLocaleString(),
    operation: getOperationName(operation.value),
    correct: correctCount.value,
    total: questions.value.length,
    time: elapsedTime.value,
  });
  history.value = history.value.slice(0, 10);
  localStorage.setItem("math_quiz_history", JSON.stringify(history.value));
};

const restart = () => {
  started.value = false;
  questions.value = [];
  submitted.value = false;
};

const startTimer = () => {
  startTime.value = Date.now();
  timer.value = setInterval(() => {
    elapsedTime.value = Math.floor(
      (Date.now() - (startTime.value || 0)) / 1000
    );
  }, 1000);
};

const stopTimer = () => {
  if (timer.value !== null) clearInterval(timer.value);
};

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins} 分 ${secs} 秒`;
};

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  document.documentElement.classList.toggle("dark", darkMode.value);
  localStorage.setItem("math_quiz_dark_mode", darkMode.value ? "1" : "0");
};

const printQuestions = () => {
  const content = questions.value
    .map((q, i) => `${i + 1}. ${q.a} ${q.op} ${q.b} = ______`)
    .join("\n");
  const w = window.open("", "", "width=600,height=800");
  if (w) {
    w.document.write("<pre>" + content + "</pre>");
    w.print();
    w.close();
  }
};

const getOperationName = (op: string) => {
  return { "+": "加法", "-": "減法", "*": "乘法", "/": "除法" }[op] || op;
};
onMounted(() => {
  const dark = localStorage.getItem("math_quiz_dark_mode") === "1";
  darkMode.value = dark;
  document.documentElement.classList.toggle("dark", dark);

  const savedHistory = localStorage.getItem("math_quiz_history");
  if (savedHistory) {
    history.value = JSON.parse(savedHistory);
  }
});
</script>
