$(function () {

  $.addTemplateFormatter({
    upperCaseFormatter: function (value, options) {
      return value.toUpperCase();
    },
    lowerCaseFormatter: function (value, options) {
      return value.toLowerCase();
    },
    sameCaseFormatter: function (value, options) {
      if (options == "upper") {
        return value.toUpperCase();
      } else {
        return value.toLowerCase();
      }
    }
  });
});
