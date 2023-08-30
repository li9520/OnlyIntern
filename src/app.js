
const app = (defaultPoints=[]) => {
  const state = {
    points: defaultPoints,
    activePoints: [],
  }
  const container = document.querySelector('.main');

  const renderPoints = (container, state) => {
    container.innerHTML = '';
    state.points.forEach(({id, name, location, backgroundColor}) => {
      const isActive = state.activePoints.includes(id);
      const point = document.createElement('button');
      const [top, left] = location;
      point.dataset.id = id;
      point.dataset.name = name;
      point.classList.add('point');
      if(isActive) {
        point.classList.add('active');
      }
      point.innerHTML = isActive ?  `<div>&minus;</div><div>${name}</div>`: '&plus;';
      point.style.top = top;
      point.style.left = left;
      point.style.backgroundColor = backgroundColor;
      container.append(point);
    })
  }

  container.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (!button) {
      return;
    }
    const id = button.dataset.id;
    const isActive = state.activePoints.includes(id);
    if(isActive) {
      state.activePoints = state.activePoints.filter((el) => el !== id);
    } else {
      state.activePoints.push(id);
    }
    renderPoints(container, state)
  })
  
  renderPoints(container, state);
}

export default app;