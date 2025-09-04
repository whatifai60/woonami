const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// 간단 테스트용 라우트
app.post('/skill', (req, res) => {
    const userMessage = req.body.userRequest?.utterance || '';

    // 테스트용 로직: a조, b조 입력하면 예시 메시지
    if(userMessage.includes('a조')) {
        res.json({ version: "2.0", template: { outputs: [{ simpleText: { text: "A조 배정 완료! 🎉" } }] } });
    } else if(userMessage.includes('b조')) {
        res.json({ version: "2.0", template: { outputs: [{ simpleText: { text: "B조 배정 완료! 🎉" } }] } });
    } else {
        res.json({ version: "2.0", template: { outputs: [{ simpleText: { text: "운암이 봇 테스트 중!" } }] } });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
