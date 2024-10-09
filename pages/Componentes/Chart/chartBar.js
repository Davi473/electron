
export default class ChartBar
{
  constructor()
  {
    this.element = document.createElement("canvas");
    this.element.id = "myChart";
  }

  init()
  {
    const option = {
	    type: "bar",
	    data: {
		    labels: ["Jan", "Fev", "Mar", "Abr"],
		    datasets: [{
		        data: [12, 19, 3, 5],
		        backgroundColor: [
			    "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                       	    "rgba(75, 192, 192, 0.2)"
		        ],
		        borderColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)"
                       ],
		       borderWidth: 1
	           }]
	    },
	    options: {
		scales: {
			y: {
				beginAtZero: true
			}
		}
	   }         
    };
    this.element.getContext("2d");
    const myChart = new Chart(this.element, option);
  }
}
