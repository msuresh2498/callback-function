function countdown(number, callback) {
    if (number > 0) {
      setTimeout(function () {
        document.getElementById("output").innerHTML = number;
        countdown(number - 1, callback);
      }, 1000);
    } else {
      callback();
    }
  }

  countdown(10, function () {
    setTimeout(function () {
      document.getElementById("output").innerHTML = "Happy Independence Day";
    }, 1000);
  });

  