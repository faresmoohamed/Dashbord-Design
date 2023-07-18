
document.addEventListener("DOMContentLoaded", function() {

	new Chart(document.getElementById("chartjs-dashboard-pie"), {
		type: 'line',
		data: {
			labels: ["PHP", "JavaScript", "Programming", "Code", "Design", "Logic"],
			datasets: [{
				data: [160, 145, 200, 145, 130, 107, 210],
				backgroundColor: '#97c3f8',
        fill:true,
				borderColor: '#0075ff ',
        tension: 0.1,
        pointBorderWidth: 6,
        pointHoverBorderWidth:6,
        pointBorderColor:'#0075ff'
      }]
		},
		options: {
			responsive: !window.MSInputMethodContext,
			maintainAspectRatio: false,
			legend: {
				display: false
			}
		}
	});
});



		// =========================================


function fun(progressBar, valueContainer, progressValue, progressEndValue, speed){
let progress = setInterval( () => {
  progressValue++;
  valueContainer.textContent =`${progressValue}%`;
  if(progressBar == document.querySelector(".circual-progress")){
    progressBar .style.background = `conic-gradient(
      #0075ff ${progressValue * 3.6}deg,
      #CCE3FF ${progressValue * 3.6}deg
    )`
  }
  if(progressBar == document.querySelector(".circual-progress2")){
    progressBar .style.background = `conic-gradient(
      #22C55E ${progressValue * 3.6}deg,
      #D2F4DF ${progressValue * 3.6}deg
    )`
  }
  if(progressBar == document.querySelector(".circual-progress3")){
    progressBar .style.background = `conic-gradient(
      #f59e0b ${progressValue * 3.6}deg,
      #FDECCE ${progressValue * 3.6}deg
    )`
  }

  if (progressValue == progressEndValue){
    clearInterval(progress);
  }
}, speed);
};
fun(document.querySelector(".circual-progress"), document.querySelector(".value-container"), 0, 80, 50);
fun(document.querySelector(".circual-progress2"), document.querySelector(".value-container2"), 0, 75, 50);
fun(document.querySelector(".circual-progress3"), document.querySelector(".value-container3"), 0, 55, 50);












