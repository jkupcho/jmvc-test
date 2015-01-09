steal(
  'addresses/components/addressEntry',
  function (AddressEntry) {
    $(document).ready(function() {
      new AddressEntry("#content");
    });
  }
)