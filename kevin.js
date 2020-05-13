var result = "";

function generate() {
  let autocopy = $("#autocopy").prop("checked");

  result = "";

  let first = $("#first-name").val();
  let last = $("#last-name").val();
  let domain = $("#domain").val();

  let patterns = [];

  patterns.push(first + last + "@" + domain);
  patterns.push(first.charAt(0) + "." + last.charAt(0) + "@" + domain);
  patterns.push(first.charAt(0) + "." + last + "@" + domain);
  patterns.push(first.charAt(0) + last + "@" + domain);
  patterns.push(first + "@" + domain);
  patterns.push(first + "." + last + "@" + domain);
  patterns.push(last + "@" + domain);
  patterns.push(first + "." + last.charAt(0) + "@" + domain);
  patterns.push(first + last.charAt(0) + "@" + domain);

  let new_html = "";

  for (pattern of patterns) {
    result += pattern.toLowerCase() + "\n";
    new_html += "<p class='mb-1 text-light'>" + pattern.toLowerCase() + "</p>";
  }

  $("#results").html(new_html);

  $("#first-name").val("");
  $("#last-name").val("");
  $("#domain").val("");

  if (autocopy) copy_results();
}

function copy_results() {
  const el = document.createElement("textarea");
  el.value = result;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

function enter_gen(event) {
  event = event || window.event;
  var key_code = event.keyCode || event.which;
  if (key_code == 13) {
    generate();
  }
}
