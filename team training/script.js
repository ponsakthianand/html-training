/*----home----
{
const select=document.getElementById('Home')
    select.classList.add('select')
    console.log(value);
}
/*----add
function blurHandle() {
    const select=document.getElementById('Home')
     select.classList.add('select')
}
     
/*----remove
function blurHandle() {
    const select=document.getElementById('Home')
     select.classList.remove('select')
}
     ---*/

const path=document
//const checkurl.geElementById('home')
//console.log(value);

 // const siblings=select.previousSibling()
    //const siblingNext=select.nextSibling()
    //siblings.classList.remove('select')
    //siblingNext.classlist.remove('select')


const HomePageData="<div class=\"content1\">\r\n     <div class=\"contentheader\">Template Usage</div>\r\n        <div class=\"paragraph\">\r\n            <p>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :)</p>\r\n                <p>\r\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.\r\n                </p>\r\n                <p>\r\n                (read more)\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div class=\"content1\">\r\n        <div class=\"contentheader\">Another Title Goes Here!</div>\r\n        <div class=\"paragraph\">\r\n            <p>This particular template goes not have a naviagation panel; it was intended for simple sites. I am also making a version of this template with navigation, check out BryantSmith.com to get it.</p>\r\n           <p>(read more)</p>\r\n            </div>\r\n            </div>\r\n            <div class=\"content1\">\r\n                <div class=\"contentheader\">Yet Another?</div>\r\n                <div class=\"paragraph\">\r\n                    <p>Each title is an H1 tag, so choose them carefully :)</p>\r\n        \r\n                    </div>   \r\n                    </div>\r\n                    </div>\r\n                    </div>"




/*----about----*

function clickHandle() {
   const select=document.getElementById('about')
   const selectHome=document.getElementById('Home')
   const content=document.getElementById('contentpart')
    select.classList.add('select')
    selectHome.classList.remove('select')

     content.innerHTML = 'this is about us page'
}

function HomeHandle() {
 const select=document.getElementById('Home')
 selectabout=document.getElementById('about')
const content=document.getElementById('contentpart')
select.classList.add('select')
selectabout.classList.remove('select')

  content.innerHTML = HomePageData
}---*/



  function clickHandle(value) {
   
     if (value==='Home'){
    const select=document.getElementById(value)
    const removeclass=document.getElementById('Home')
    const content=document.getElementById('contentpart')
    select.classList.add('select')
    removeclass.classList.remove('select')

    content.innerHTML =HomePageData

  }else if(value==='about'){
    const select=document.getElementById(value)
    const removeclass=document.getElementById('about')
    const content=document.getElementById('contentpart')
    select.classList.add('select')
    removeclass.classList.remove('select')

    content.innerHTML = 'this is about us page'
  }
  else if(value==='portfolio'){
     const select=document.getElementById(value)
    const removeclass=document.getElementById('portfolio')
    const content=document.getElementById('contentpart')
    select.classList.add('select')
    removeclass.classList.remove('select')
     content.innerHTML = 'This is let me portfolio'
}
  else if(value==='prices'){
     const select=document.getElementById(value)
    const removeclass=document.getElementById('prices')
    const content=document.getElementById('contentpart')
    select.classList.add('select')
    removeclass.classList.remove('select')
     content.innerHTML = 'converted to the prices value'
}

   else if(value==='products'){
    const select=document.getElementById(value)
    const removeclass=document.getElementById('products')
    const content=document.getElementById('contentpart')
    select.classList.add('select')
    removeclass.classList.remove('select')

    content.innerHTML = 'products development web area content'
  }
  else if(value==='faq'){
     const select=document.getElementById(value)
    const removeclass=document.getElementById('faq')
    const content=document.getElementById('contentpart')
    select.classList.add('select')
    removeclass.classList.remove('select')
     content.innerHTML = 'content area is a faq'
}
  else if(value==='contact'){
     const select=document.getElementById(value)
    const removeclass=document.getElementById('contact')
    const content=document.getElementById('contentpart')
    select.classList.add('select')
    removeclass.classList.remove('select')
     content.innerHTML = 'converted to the area contact'
}
}





/*---

  if (value==='Home'){
    const removeclass=document.getElementById('about')
    removeclass.classList.remove('select')
    content.innerHTML = HomePageData
     }else if(value==='about'){
    const removeclass=document.getElementById('Home')
    removeclass.classList.remove('select')
   content.innerHTML = 'this is about us page'
}

--*/


