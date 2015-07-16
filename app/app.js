
var app = angular.module('myApp', ['pascalprecht.translate']);

app.config(['$translateProvider', function ($translateProvider) {
  // add translation table
  //$translateProvider.translations('en', translationsEN);
  //$translateProvider.translations('zh-cn', translationsCN);
  //$translateProvider.translations('zh', translationsCN);
  //$translateProvider.preferredLanguage('en');
  //$translateProvider.fallbackLanguage('en');
  //$translateProvider.registerAvailableLanguageKeys(['en', 'zh'], {
  //  'en_US': 'en',
  //  'en_UK': 'en',
  //  'zh_CN': 'zh',
  //  'zh_TW': 'zh'
  //})
  $translateProvider.translations('en', {
    'HELLO_TEXT': 'Hello World!'
  });
  $translateProvider.useStaticFilesLoader({
    prefix: 'i18n/data/locate-',
    suffix: '.json'
  });
  $translateProvider.preferredLanguage('en');
  $translateProvider.forceAsyncReload(true);
}]);

app.controller('Ctrl', ['$scope', '$translate', function ($scope, $translate) {
  // expose translation via `$translate` service
  $translate('HEADLINE').then(function (headline) {
    $scope.headline = headline;
  });
  $translate('PARAGRAPH').then(function (paragraph) {
    $scope.paragraph = paragraph;
  });
  $translate('NAMESPACE.PARAGRAPH').then(function (anotherOne) {
    $scope.namespaced_paragraph = anotherOne;
  });

  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
}]);