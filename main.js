var path = require('path');

module.exports.init = function (generator) {
  generator.evaluateJSXString('app.activeDocument.id').then(function (id) {
    if (id) {
      generator.getDocumentPixmap(id, {}).then(function (pixmap) {
        generator.savePixmap(pixmap, path.resolve('document-pixmap.png'), {
          format: 'png',
          ppi: 72,
        }).then(function () {
          console.log('Document exported to document-pixmap.png');
        });
      }, function (reason) {
        console.log('getDocumentPixmap rejected', reason);
      })
    } else {
      console.log('No document to export');
    }
  });
};