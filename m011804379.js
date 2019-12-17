function showAll() {
  console.log(tweets);
  let answer = document.querySelector("#answer");
  let answerHTML = "";

  answerHTML = "<ul>";
  let i = 0;
  while (i < tweets.length) {
    answerHTML = answerHTML + "<li>"
        + "<b>" + tweets[i].name + "</b>: "
        + tweets[i].message + " "
        + "<i>" + tweets[i].tweetedAt + "</i>"
        + "</li>";
    i++;
  }
  answerHTML = answerHTML + "</ul>";
  answer.innerHTML = answerHTML;
}


function saburoBOT() {
  console.log(tweets);
  let answer = document.querySelector("#answer");
  let answerHTML = "";

  answerHTML = "<ul>";
  let i = 0;
  while (i < tweets.length) {
    if(tweets[i].name !== "三郎BOT"){
      i++;
      continue;
    }
    answerHTML = answerHTML + "<li>"
        + "<b>" + tweets[i].name + "</b>: "
        + tweets[i].message + " "
        + "<i>" + tweets[i].tweetedAt + "</i>"
        + "</li>";
    i++;
  }
  answerHTML = answerHTML + "</ul>";
  answer.innerHTML = answerHTML;
}


function jiro() {
  console.log(tweets);
  let answer = document.querySelector("#answer");
  let answerHTML = "";

  answerHTML = "<ul>";
  let i = 0;
  while (i < tweets.length) {
    if(tweets[i].name !== "次郎"){
      i++;
      continue;
    }
    answerHTML = answerHTML + "<li>"
        + "<b>" + tweets[i].name + "</b>: "
        + tweets[i].message + " "
        + "<i>" + tweets[i].tweetedAt + "</i>"
        + "</li>";
    i++;
  }
  answerHTML = answerHTML + "</ul>";
  answer.innerHTML = answerHTML;
}

function taro() {
  console.log(tweets);
  let answer = document.querySelector("#answer");
  let answerHTML = "";

  answerHTML = "<ul>";
  let i = 0;
  while (i < tweets.length) {
    if(tweets[i].name !== "太郎"){
      i++;
      continue;
    }
    answerHTML = answerHTML + "<li>"
        + "<b>" + tweets[i].name + "</b>: "
        + tweets[i].message + " "
        + "<i>" + tweets[i].tweetedAt + "</i>"
        + "</li>";
    i++;
  }
  answerHTML = answerHTML + "</ul>";
  answer.innerHTML = answerHTML;
}

