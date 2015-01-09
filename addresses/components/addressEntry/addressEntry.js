steal(
  'can',
  './views/addressEntry.mustache',
  function (can, AddressEntryView) {
    return can.Control(
      { /** Static */ },
      { /** Prototype */
        init: function () {
          var frag = AddressEntryView();
          this.element.html(frag);
        }
      }
    )
  });