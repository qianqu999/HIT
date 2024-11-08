// script.js
let score = 0;
let currentQuestion = 1;

// 记录用户选择的分数并显示下一题
function selectOption(questionId, points) {
    score += points;

    // 隐藏当前问题，显示下一个问题或结果
    document.getElementById(questionId).style.display = "none";
    currentQuestion++;

    if (currentQuestion === 2) {
        document.getElementById("question2").style.display = "block";
    } else {
        showResult();
    }
}

// 计算并显示结果
function showResult() {
    const resultText = document.getElementById("resultText");
    if (score === 0) {
        resultText.innerText = "你是躺平型！";
    } else if (score === 1 || score === 2) {
        resultText.innerText = "你是努力型！";
    }

    document.getElementById("result").style.display = "block";
}

// 重新开始测试
function restartQuiz() {
    score = 0;
    currentQuestion = 1;
    document.getElementById("result").style.display = "none";
    document.getElementById("question1").style.display = "block";
}
