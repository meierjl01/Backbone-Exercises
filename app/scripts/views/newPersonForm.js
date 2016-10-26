import Backbone from 'backbone';
import $ from 'jquery';

function renderPersonForm(people) {
  const element = $(`
    <form class="new-person">
      <input type="text" name="first-name" placeholder="First Name">
      <input type="text" name="last-name" placeholder="Last Name">
      <input type="text" name="address" placeholder="Address">
      <input type="text" name="phone-number" placeholder="Phone Number">
      <input type="submit" name="name" value="Save">
    </form>
    `);
    element.on('submit', function(e) {
      e.preventDefault();
      const firstName = $(this).find('input[name="first-name"]').val();
      const lastName = $(this).find('input[name="last-name"]').val();
      const address = $(this).find('input[name="address"]').val();
      const phoneNumber = $(this).find('input[name="phone-number"]').val();
      people.create({firstName, lastName, address, phoneNumber}, {
        success: (data) => {
          console.log('successful person creation', data);
        }
      });
      location.hash = '';
    });
    return element;
}

export default renderPersonForm;
