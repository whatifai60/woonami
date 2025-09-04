const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // JSON 파싱 필수

app.post('/skill', (req, res) => {
    const userMessage = req.body.userRequest?.utterance || '';

    let responseText = "운암이 봇 테스트 중!";

    if (userMessage.includes('a조')) responseText = "A조 배정 완료! 🎉";
    else if (userMessage.includes('b조')) responseText = "B조 배정 완료! 🎉";

    res.setHeader('Content-Type', 'application/json'); // 명시적으로 JSON 헤더 추가
    res.json({
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: { text: responseText }
                }
            ]
        }
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
