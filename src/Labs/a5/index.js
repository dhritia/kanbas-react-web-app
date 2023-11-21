import EncodingParametersInURLs from "../../kanbas-node-server-app/EncodingParametersInURLs";
import SimpleAPIExamples from "../../kanbas-node-server-app/SimpleAPIExamples";
import WorkingWithArrays from "../../kanbas-node-server-app/WorkingWithArrays";
import WorkingWithObjects from "../../kanbas-node-server-app/WorkingWithObjects";
function Assignment5() {
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href="http://localhost:4000/a5/welcome"
             className="list-group-item">
            Welcome
          </a>
        </div>
        <SimpleAPIExamples/>
        <EncodingParametersInURLs/>
        <WorkingWithObjects/>
        <WorkingWithArrays/>
      </div>
    );
  }
  export default Assignment5;
  