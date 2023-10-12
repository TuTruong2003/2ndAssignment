//there are databases for my project
users = [
    {
        "name" : "iboya vat",
        "image" : "https://randomuser.me/api/portraits/thumb/women/67.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "aapo niskanen",
        "image" : "https://randomuser.me/api/portraits/thumb/men/34.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "zilda moreira",
        "image" : "https://randomuser.me/api/portraits/thumb/women/38.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "lilou le gall",
        "image" : "https://randomuser.me/api/portraits/thumb/women/23.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "lucy hall",
        "image" : "https://randomuser.me/api/portraits/thumb/women/24.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "sara alves",
        "image" : "https://randomuser.me/api/portraits/thumb/women/14.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "ramon macrae",
        "image" : "https://randomuser.me/api/portraits/thumb/men/49.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "connor taylor",
        "image" : "https://randomuser.me/api/portraits/thumb/men/15.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "aymeric morel",
        "image" : "https://randomuser.me/api/portraits/thumb/men/11.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "lorenz otto",
        "image" : "https://randomuser.me/api/portraits/thumb/men/49.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "karl williamson",
        "image" : "https://randomuser.me/api/portraits/thumb/men/29.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "ouassim heering",
        "image" : "https://randomuser.me/api/portraits/thumb/men/34.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "roberto molina",
        "image" : "https://randomuser.me/api/portraits/thumb/men/91.jpg",
        "joined" : "06/03/15"
    },
    {
        "name" : "jordan hubert",
        "image" : "https://randomuser.me/api/portraits/thumb/men/28.jpg",
        "joined" : "06/03/15"
    },
    {
        "name" : "melvin baker",
        "image" : "https://randomuser.me/api/portraits/thumb/men/29.jpg",
        "joined" : "09/18/14"
    },
    {
        "name" : "everett gordon",
        "image" : "https://randomuser.me/api/portraits/thumb/men/26.jpg",
        "joined" : "06/17/15"
    },
    {
        "name" : "aiden ma",
        "image" : "https://randomuser.me/api/portraits/thumb/men/82.jpg",
        "joined" : "07/18/12"
    },
    {
        "name" : "florent gerard",
        "image" : "https://randomuser.me/api/portraits/thumb/men/62.jpg",
        "joined" : "02/12/13"
    },
    {
        "name" : "amber chen",
        "image" : "https://randomuser.me/api/portraits/thumb/women/96.jpg",
        "joined" : "07/12/12"
    },
    {
        "name" : "alexandra davies",
        "image" : "https://randomuser.me/api/portraits/thumb/women/9.jpg",
        "joined" : "05/11/13"
    },
    {
        "name" : "sergio cole",
        "image" : "https://randomuser.me/api/portraits/thumb/men/57.jpg",
        "joined" : "02/17/15"
    },
    {
        "name" : "edgar dixon",
        "image" : "https://randomuser.me/api/portraits/thumb/men/98.jpg",
        "joined" : "06/17/11"
    },
    {
        "name" : "kirk myers",
        "image" : "https://randomuser.me/api/portraits/thumb/men/94.jpg",
        "joined" : "09/17/15"
    },
    {
        "name" : "ani hesseling",
        "image" : "https://randomuser.me/api/portraits/thumb/women/28.jpg",
        "joined" : "08/14/16"
    },
    {
        "name" : "victoire bonnet",
        "image" : "https://randomuser.me/api/portraits/thumb/women/24.jpg",
        "joined" : "05/13/16"
    },
    {
        "name" : "marcos morales",
        "image" : "https://randomuser.me/api/portraits/thumb/men/44.jpg",
        "joined" : "01/12/12"
    },
    {
        "name" : "nils neumann",
        "image" : "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        "joined" : "03/11/12"
    },
    {
        "name" : "emily harrison",
        "image" : "https://randomuser.me/api/portraits/thumb/women/86.jpg",
        "joined" : "07/18/15"
    },
    {
        "name" : "matthew fortin",
        "image" : "https://randomuser.me/api/portraits/thumb/men/41.jpg",
        "joined" : "03/18/15"
    },
    {
        "name" : "charlotte steward",
        "image" : "https://randomuser.me/api/portraits/thumb/women/32.jpg",
        "joined" : "02/18/11"
    },
    {
        "name" : "marceau rodriguez",
        "image" : "https://randomuser.me/api/portraits/thumb/men/3.jpg",
        "joined" : "07/13/14"
    },
    {
        "name" : "hudson anderson",
        "image" : "https://randomuser.me/api/portraits/thumb/men/91.jpg",
        "joined" : "09/12/15"
    }
]


const limitedContacts = 10;//only 10 users in 1 page
function makeLists(pageNum) {
  const iniIndex = (pageNum - 1) * limitedContacts;
  const finalIndex = pageNum * limitedContacts;
  const finalContact = users.slice(iniIndex, finalIndex);// use slice method get only the contacts
  let contactHTML = '';

  for (const index of finalContact) {
    contactHTML += `
      <li class="contact-item cf">
        <div class="contact-details">
          <img class="avatar" src="${index.image}">
          <h3>${index.name}</h3>
          <span class="email">@gmail.com</span>
        </div>
        <div class="joined-details">
          <span class="date">Joined ${index.joined}</span>
        </div>
      </li>
    `;
  }
  const contactList = document.querySelector('.contact-list');
  contactList.innerHTML = contactHTML;
}

function generatePaginationLinks(totalContacts) {
  const totalPages = Math.ceil(totalContacts / limitedContacts);// calculate the total number of pages
  let linksHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    linksHTML += `<a href="#" class="finalPagination" data-page="${i}">${i}</a>`;
  }

  const paginationContainer = document.querySelector('.pagination');
  paginationContainer.innerHTML = linksHTML;


  const paginationLinks = document.querySelectorAll('.finalPagination');
  for (const link of paginationLinks) { // use addEventListener to show different page
    link.addEventListener('click', event => {
      const pageNum = parseInt(event.target.dataset.page);
      makeLists(pageNum);
    });
  }
}
const totalContacts = users.length;
generatePaginationLinks(totalContacts);
makeLists(1);//show the first page

