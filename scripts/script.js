//добавление и удаление анимации у кнопки "Подробнее"

const buttonDetail = document.querySelectorAll('.intro__button');

buttonDetail.forEach(function(obj) {
    obj.addEventListener('mouseover', function () {
        obj.classList.add('animation-color');
    });
    obj.addEventListener('mouseout', function () {
        obj.classList.remove('animation-color');
    });
    obj.addEventListener('click', function () {
        location = '#roads';
    });
});

//формирование десктопной секции roads
const roadsTemplate = document.querySelector('#createRoads').content;               
const roads = document.querySelector('.roads');                   

function createRoads(obj) {
    const road = roadsTemplate.querySelector('.road').cloneNode(true);
    road.querySelector('.title').textContent = obj.name;
    road.querySelector('.road__description').textContent = obj.text;
    road.querySelector('.road__image-with-stycky').src = obj.srcWithSticky;
    road.querySelector('.road__image-with-stycky').alt = obj.altWithSticky;
    road.querySelector('.road__image-not-stycky').src = obj.srcNotSticky;
    road.querySelector('.road__image-not-stycky').alt = obj.altNotSticky;
    road.querySelector('.road__sticky-line').src = obj.stickyLine;

    if (obj.name === 'Шоссе') {
        road.classList.remove('road_hidden');
    }

    return road;
}

initialCardsRoads.forEach(function(obj) {
    const road = createRoads(obj);
    roads.append(road);
});

//формирование мобильной секции roads
const roadsMobTemplate = document.querySelector('#createRoadsMobile').content;   
const roadsMob = document.querySelector('.roads-mobile');                               

function createRoadsMob(obj) {
    const roadMob = roadsMobTemplate.querySelector('.road-mobile').cloneNode(true);
    roadMob.querySelector('.title').textContent = obj.name;
    roadMob.querySelector('.road__description').textContent = obj.text;
    roadMob.querySelector('.road__image-with-stycky').src = obj.srcWithSticky;
    roadMob.querySelector('.road__image-with-stycky').alt = obj.altWithSticky;
    roadMob.querySelector('.road__sticky-line').src = obj.stickyLine;

    if (obj.name === 'Шоссе') {
        roadMob.classList.remove('road-mobile_hidden');
    }
    
    return roadMob;
}

initialCardsRoads.forEach(function(obj) {
    const roadMob = createRoadsMob(obj);
    roadsMob.append(roadMob);
});

//переключение секции "road" вперед

const buttonForvardArray = roads.querySelectorAll('.road__button-forward');
buttonForvardArray.forEach(function(obj){
    obj.addEventListener('click', function () {
        const roadsArr = document.querySelectorAll('.road');
        for(let i = 0; i <= roadsArr.length; i++) {
            if(!(roadsArr[i].classList.contains('road_hidden'))) {
                roadsArr[i].classList.add('road_hidden');
                if(i+1 < roadsArr.length) {
                    roadsArr[i+1].classList.remove('road_hidden');
                }
                if(i+1 >= roadsArr.length) {
                    roadsArr[0].classList.remove('road_hidden');
                }
                
                break;
            }
       }
    });
});

//переключение секции "road" назад

const buttonBackArray = roads.querySelectorAll('.road__button-back');

buttonBackArray.forEach(function(obj){
    obj.addEventListener('click', function () {
        const roadsArr = document.querySelectorAll('.road');
        for(let i = 0; i <= roadsArr.length; i++) {
            if(!(roadsArr[i].classList.contains('road_hidden'))) {
                roadsArr[i].classList.add('road_hidden');
                if(i-1 >= 0) {
                    roadsArr[i-1].classList.remove('road_hidden');
                }
                if(i-1 < 0) {
                    roadsArr[roadsArr.length-1].classList.remove('road_hidden');
                }
                
                break;
            }
       }
    });
});

//переключение мобильной секции "road" вперед

const buttonForvardMobArray = roadsMob.querySelectorAll('.road__button-forward');

buttonForvardMobArray.forEach(function(obj){
    obj.addEventListener('click', function () {
        const roadMobArr = document.querySelectorAll('.road-mobile');
        for(let i = 0; i <= roadMobArr.length; i++) {
            if(!(roadMobArr[i].classList.contains('road-mobile_hidden'))) {
                roadMobArr[i].classList.add('road-mobile_hidden');
                if(i+1 < roadMobArr.length) {
                    roadMobArr[i+1].classList.remove('road-mobile_hidden');
                }
                if(i+1 >= roadMobArr.length) {
                    roadMobArr[0].classList.remove('road-mobile_hidden');
                }
                
                break;
            }
       }
    });
});

//переключение мобильной секции "road" назад

const buttonBackМobArray = roadsMob.querySelectorAll('.road__button-back');

buttonBackМobArray.forEach(function(obj){
    obj.addEventListener('click', function () {
        const roadMobArr = document.querySelectorAll('.road-mobile');
        for(let i = 0; i <= roadMobArr.length; i++) {
            if(!(roadMobArr[i].classList.contains('road-mobile_hidden'))) {
                roadMobArr[i].classList.add('road-mobile_hidden');
                if(i-1 >= 0) {
                    roadMobArr[i-1].classList.remove('road-mobile_hidden');
                }
                if(i-1 < 0) {
                    roadMobArr[roadMobArr.length-1].classList.remove('road-mobile_hidden');
                }            
                break;
            }
       }
    });
});

//формирование секции "bicycles"

const bicyclesTemplate = document.querySelector('#createBicycles').content;   
const bicycles = document.querySelector('.bicycles');                               

function createBicycles(obj) {
    const bicycle = bicyclesTemplate.querySelector('.bicycles__create-container').cloneNode(true);

    const imageArray = bicycle.querySelectorAll('.bicycles-conteiner__image');
    imageArray.forEach(function(element, index) {
        element.src = obj.src[index];
        element.alt = obj.alt[index];
    });

    const linkArray = bicycle.querySelectorAll('.bicycles-conteiner__link');
    linkArray.forEach(function(element, index) {
        element.href = obj.link[index];
    });

    const textArray = bicycle.querySelectorAll('.bicycles-conteiner__caption');
    textArray.forEach(function(element, index) {
        element.textContent = obj.text[index];
    });

    const navLinkAll = bicycle.querySelectorAll('.bicycles__link');
    navLinkAll.forEach(function(element) {
        if(element.textContent === obj.name) {
            element.classList.add('bicycles__link_active');
        }
    });

    if (obj.name === 'Шоссе') {
        bicycle.classList.remove('bicycles__create-container_hidden');
    }
    
    return bicycle;
}

initialCardsbicycles.forEach(function(obj) {
    const bicycle = createBicycles(obj);
    bicycles.append(bicycle);
});

const linkGravel = bicycles.querySelectorAll('.bicycles__link-gravel');
linkGravel.forEach(function(elem) {
    elem.addEventListener('click', function () {
        const activeElementParent = elem.closest('.bicycles__create-container');
        activeElementParent.classList.add('bicycles__create-container_hidden');

        linkGravel.forEach(function(obj) {
            if(obj.classList.contains('bicycles__link_active')) {
                const hightLightElementParent = obj.closest('.bicycles__create-container');
                hightLightElementParent.classList.remove('bicycles__create-container_hidden');
            }
            
        });
    }) ;
});

const linkTt = bicycles.querySelectorAll('.bicycles__link-tt');
linkTt.forEach(function(elem) {
    elem.addEventListener('click', function () {
        const activeElementParent = elem.closest('.bicycles__create-container');
        activeElementParent.classList.add('bicycles__create-container_hidden');

        linkTt.forEach(function(obj) {
            if(obj.classList.contains('bicycles__link_active')) {
                const hightLightElementParent = obj.closest('.bicycles__create-container');
                hightLightElementParent.classList.remove('bicycles__create-container_hidden');
            }
            
        });
    });
});

const linkHighway = bicycles.querySelectorAll('.bicycles__link-highway');
linkHighway.forEach(function(elem) {
    elem.addEventListener('click', function () {
        const activeElementParent = elem.closest('.bicycles__create-container');
        activeElementParent.classList.add('bicycles__create-container_hidden');

        linkHighway.forEach(function(obj) {
            if(obj.classList.contains('bicycles__link_active')) {
                const hightLightElementParent = obj.closest('.bicycles__create-container');
                hightLightElementParent.classList.remove('bicycles__create-container_hidden');
            } 
        });
    }) ;
});

//формирование мобильной секции "bicycles"

const bicyclesMobTemplate = document.querySelector('#bicyclesMobTemplate').content;   
const bicyclesMob = document.querySelector('.bicycles-mobile');                               

function createBicyclesMob(obj) {
    const bicycleMob = bicyclesMobTemplate.querySelector('.bicycles-mobile__conteiner').cloneNode(true);

    const imageArray = bicycleMob.querySelectorAll('.bicycles-conteiner__image');
    imageArray.forEach(function(element, index) {
        element.src = obj.src[index];
        element.alt = obj.alt[index];
    });

    const textArray = bicycleMob.querySelectorAll('.bicycles-conteiner__caption');
    textArray.forEach(function(element, index) {
        element.textContent = obj.text[index];
    });

    const imagesBlockArray = bicycleMob.querySelectorAll('.bicycles-conteiner__card');
    const firstImageNumber = 0;
    imagesBlockArray[firstImageNumber].classList.remove('bicycles-conteiner__card_hidden');
 
    const selectBox = bicycleMob.querySelector('.bicycles-mobile__filter-container');
    selectBox.value = obj.name;
    const options = selectBox.getElementsByTagName('option');
    for (i = 0; i < options.length; i++) {
        if(options[i].textContent === obj.name) {
            options[i].setAttribute('value', obj.nameCode);
        }
    }

    const points = bicycleMob.querySelectorAll('.bicycles-mobile__point');
    const firstPointNumber = 0;
    points[firstPointNumber].classList.add('bicycles-mobile__point_active');

    points.forEach(function(obj, index) {
        obj.addEventListener('click', function () {
    
            for (let i = 0; i < points.length; i++){
                if (points[i].classList.contains('bicycles-mobile__point_active')) {
                    points[i].classList.remove('bicycles-mobile__point_active');
                    imagesBlockArray[i].classList.add('bicycles-conteiner__card_hidden');
                }
            }
            obj.classList.toggle('bicycles-mobile__point_active');
            imagesBlockArray[index].classList.remove('bicycles-conteiner__card_hidden'); 
        });
    });

    if (obj.name === 'Шоссе') {
        bicycleMob.classList.remove('bicycles-mobile__conteiner_hidden');
    }

    return bicycleMob;
}

initialCardsbicycles.forEach(function(obj) {
    const bicycle = createBicyclesMob(obj);
    bicyclesMob.append(bicycle);
});

const selectBoxes = bicyclesMob.querySelectorAll('.bicycles-mobile__filter-container');

selectBoxes.forEach(function(obj) {
    obj.addEventListener('change', function () {     
        const selectBoxParent = obj.closest('.bicycles-mobile__conteiner');
        selectBoxParent.classList.add('bicycles-mobile__conteiner_hidden');  

        selectBoxes.forEach(function(elem) {
            for (let i = 0; i < elem.options.length; i++) {
                if(elem.options[i].textContent === obj.value && elem.options[i].hasAttribute('value')) {
                    const optionParent = elem.closest('.bicycles-mobile__conteiner');
                    optionParent.classList.remove('bicycles-mobile__conteiner_hidden');          
                    break;
                }       
            }          
        }); 

        for (let j = 0; j < obj.options.length; j++) {
            if(obj.options[j].hasAttribute('value')) {
                obj.options[j].selected=true;
                break;
            }
        }  
    });
});

//введение e-mail в footer

const inputForm = document.querySelector('.footer__form');
const input = document.querySelector('.footer__input');
const imputText = document.querySelector('.footer__input-text');

input.addEventListener('input', function() {
    if (input.value.length > 0) {
        imputText.classList.remove('footer__input-text_hidden');
    } 
    else {
        imputText.classList.add('footer__input-text_hidden');
    }
  });
  
  inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        input.value = 'Круто!'
        setTimeout(() => {
          input.value = '';
          imputText.classList.add('footer__input-text_hidden');
        }, 2000)
      });

  //открытие и закрытие меню header-mobile

  const headerPopup = document.querySelector('.popup');
  const headerNav = document.querySelector('.header__nav-icon-conteiner');
  const buttonClose = document.querySelector('.popup__close');
  const links = document.querySelectorAll('.popup__nav-link');

  headerNav.addEventListener('click', function() {
    headerPopup.classList.add('popup_opened');
  });

  buttonClose.addEventListener('click', function() {
    headerPopup.classList.remove('popup_opened');
  });

  links.forEach(function(elem) {
    elem.addEventListener('click', function() {
        headerPopup.classList.remove('popup_opened');
    })
  })


  //включение и выключение темной темы

  const switchersTheme = document.querySelectorAll('.switcher-conteiner__switcher-icon');
  const page = document.querySelector('.page');

  function darkTheme() {
    page.classList.add('page_theme_dark');
    const pageElements = page.querySelectorAll('*');
    pageElements.forEach(function(element) {
        if(element.classList.value.length > 0) {
            const classArray = element.classList;
            classArray.forEach(function(item) {
                let newclass = `${item}_theme_dark`;
                classArray.add(newclass);
            });
        }
    });
  }

  function lightTheme() {
    page.classList.remove('page_theme_dark');
    const pageElements = page.querySelectorAll('*');
    pageElements.forEach(function(element){
        if(element.classList.value.length > 0) {
            const classArray = element.classList;
            const newClassArray = [];
            classArray.forEach(function(item) {  
                if (item.includes('_theme_dark')) {
                    newClassArray.push(item);
                }
            });
            newClassArray.forEach(function(item) { 
                if(element.classList.contains(item)){
                    element.classList.remove(item);
                }
            });           
        }
    });
  }
  
  switchersTheme.forEach(function(element) {
      element.addEventListener('click', function() {
        if (element.classList.contains('switcher-conteiner__switcher-icon_theme_dark')) {
            element.classList.toggle('switcher-conteiner__switcher-icon_theme_dark');
            lightTheme();
        }
        else {
            element.classList.toggle('switcher-conteiner__switcher-icon_theme_dark');
            darkTheme();
        }
      });   
    });

