var result = "";

function generate() {
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

    let new_html = "";

    for(pattern of patterns) {
        result += pattern.toLowerCase() + "\n";
        new_html += "<p class='mb-1 text-light'>" + pattern.toLowerCase() + "</p>";
    }

    $("#results").html(new_html);

    $("#first-name").val("");
    $("#last-name").val("");
    $("#domain").val("");

}

function copy_results() {
    const el = document.createElement('textarea');
    el.value = result;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
