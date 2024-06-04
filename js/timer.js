setInterval(() => {
    let create_time = Math.round(new Date('2024-06-03 00:00:00').getTime() / 1000); //在此行修改建站时间
    let timestamp = Math.round((new Date().getTime()) / 1000);
    let second = timestamp - create_time;
    let time = new Array(0, 0, 0, 0);

    var nol = function (h) {
        return h > 9 ? h : '0' + h;
    }
    if (second >= 24 * 3600) {
        time[0] = parseInt(second / (24 * 3600));
        second %= 24 * 3600;
    }
    if (second >= 3600) {
        time[1] = nol(parseInt(second / 3600));
        second %= 3600;
    }
    if (second >= 60) {
        time[2] = nol(parseInt(second / 60));
        second %= 60;
    }
    if (second > 0) {
        time[3] = nol(second);
    }
    if ((Number(time[1]) < 22) && (Number(time[1]) > 6)) {
        currentTimeHtml = "-" + "<div id='runtime'>" + "𓇢˙↟⛰️ " + "喵喵在山川中游历了 " + time[0] + ' 天 ' + time[1] + ' 小时 ' + time[2] + ' 分 ' + time[3] + ' 秒 ' + " ☁️˚｡˙" + '</div>';
    }
    else {
        currentTimeHtml = "-" + "<div id='runtime'>" + "⋆⁺₊✧ " + "喵喵在星河中漂流了 " + time[0] + ' 天 ' + time[1] + ' 小时 ' + time[2] + ' 分 ' + time[3] + ' 秒 ' + " ☾₊ ⊹" + '</div>';
    }
    document.getElementById("workboard").innerHTML = currentTimeHtml;
}, 1000);