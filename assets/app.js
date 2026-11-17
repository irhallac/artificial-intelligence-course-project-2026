(function () {
  "use strict";

  var data = window.COURSE_DATA || {};

  function createElement(tag, className, text) {
    var element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function formatDate(value) {
    if (!value) return "";
    var parts = value.split("-");
    if (parts.length !== 3) return value;
    var date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(date);
  }

  function renderAnnouncements() {
    var list = document.querySelector("[data-announcement-list]");
    if (!list) return;

    var announcements = Array.isArray(data.announcements) ? data.announcements : [];
    list.replaceChildren();

    if (announcements.length === 0) {
      list.appendChild(createElement("p", "small-muted", "There are no announcements yet."));
      return;
    }

    var sortedAnnouncements = announcements
      .slice()
      .sort(function (a, b) { return String(b.date).localeCompare(String(a.date)); });

    sortedAnnouncements.forEach(function (item) {
        var article = createElement("article", "announcement-item");
        var time = createElement("time", "", formatDate(item.date));
        time.dateTime = item.date;
        var content = createElement("div");
        content.appendChild(createElement("h3", "", item.title));
        content.appendChild(createElement("p", "", item.body));
        article.appendChild(time);
        article.appendChild(content);
        list.appendChild(article);
    });

    var updated = document.querySelector("[data-announcement-updated]");
    if (updated) updated.textContent = "Updated " + formatDate(sortedAnnouncements[0].date);
  }

  function renderFaq() {
    var list = document.querySelector("[data-faq-list]");
    if (!list) return;

    var questions = Array.isArray(data.faq) ? data.faq : [];
    list.replaceChildren();

    if (questions.length === 0) {
      list.appendChild(createElement("p", "small-muted", "There are no questions yet."));
      return;
    }

    questions.forEach(function (item) {
      var details = createElement("details");
      details.appendChild(createElement("summary", "", item.question));
      details.appendChild(createElement("p", "", item.answer));
      list.appendChild(details);
    });
  }

  renderAnnouncements();
  renderFaq();
}());
