let NavMenu = document.querySelector(".menu") as HTMLDivElement;
let MenuContent = document.querySelector('.menu_content') as HTMLUListElement;

NavMenu.addEventListener('click', (e: Event) => {
  let Anchor = e.target as HTMLAnchorElement;

  if (Anchor.id === 'menu_trigger' && window.innerWidth <= 575 ) {
      

      if (getComputedStyle(MenuContent).height == '0px') {
          MenuContent.style.height = `${MenuContent.scrollHeight.toString()}px`
      } else {
          MenuContent.style.height = '0px'
      }
      
      
  }
  
})
