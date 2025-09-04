const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/skill', (req, res) => {
    const userMessage = req.body.userRequest?.utterance || '';

    let responseText = "운암이 봇 테스트 중!";

    if (userMessage.includes('a조')) responseText = "A조 배정 완료! 🎉";
    else if (userMessage.includes('b조')) responseText = "B조 배정 완료! 🎉";

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
