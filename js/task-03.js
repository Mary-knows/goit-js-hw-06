const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galeryRef = document.querySelector('.gallery');
galeryRef.classList.add('galery-js')

const makeOneImageRef = ({ url, alt }) => {
  const liRef = document.createElement('li');
  
  const imgRef = document.createElement('img');
  imgRef.src = url;
  imgRef.alt = alt;
  imgRef.style.width = '400px';
  imgRef.style.height = '300px';
  imgRef.style.marginRight = '40px';

  liRef.append(imgRef);
  
  return liRef;
};

const imagesRef = images.map(makeOneImageRef)

galeryRef.append(...imagesRef)