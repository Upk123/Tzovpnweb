function showContent(id){
  document.querySelectorAll('.content').forEach(el => el.classList.remove('active'));
  const target = document.getElementById(id);
  if(target){
    target.classList.add('active');
    window.scrollTo({ top: target.offsetTop - 10, behavior: 'smooth' });
  }
}