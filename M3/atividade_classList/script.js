function changeStyle() {

  const divs = document.querySelectorAll('.block');
  for (let i = 0; i < divs.length; i++) {
    const div = divs[i];
    div.classList.toggle('circle');
    // div.style.backgroundColor = 'yellow';    
  }
  
  const listItens = document.querySelectorAll('li');
  for (let i = 0; i < listItens.length; i++) {
    const li = listItens[i];
    li.classList.toggle('itemCard');
  }

  const spans = document.querySelectorAll('span');
  for (let i = 0; i < spans.length; i++) {
    const span = spans[i];
    const online = span.classList.toggle('online');
    if (online) {
      span.classList.remove('offline');
    }       
  }

  const paragraphs = document.querySelectorAll('p');
  for (let i = 0; i < paragraphs.length; i++) {
    const p = paragraphs[i];
  }  
}
