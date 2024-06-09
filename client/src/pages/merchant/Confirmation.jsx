// import { useEffect, useState, useRef } from "react";
// import * as d3 from 'd3';

export default function Confirmation() {
//   const [data, setData] = useState({});
//   const [nodes, setNodes] = useState([]);
//   const [links, setLinks] = useState([]);
//   const graphContainerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch('/data.json');
//       const result = await res.json();
//       console.log("res", result);
//       setData(result);
//       await setNodes(result.nodes);
//       await setLinks(result.links);

//     }

//     fetchData();
//   }, [])

//   useEffect(() => {
//     if (!nodes.length || !links.length) return;

//     console.log('nodes --- ', nodes);
//     console.log('Links --- ', links);

//     // Specify the dimensions of the chart.
//     const width = 928;
//     const height = 680;

//     const color = d3.scaleOrdinal(d3.schemeCategory10);

//     const linksG = links.map((d:any) => ({...d}));
//     const nodesG = nodes.map((d:any) => ({...d}));

    

//     const svg = d3.select(graphContainerRef.current)
//       .select('svg')
//       .attr("width", width)
//       .attr("height", height)
//       .attr("viewBox", [0, 0, width, height])
//       .attr("style", "max-width: 100%; height: auto;");

//     console.log('svg', svg)

    

//     const link = svg.append("g")
//       .attr("stroke", "#999")
//       .attr("stroke-opacity", 0.6)
//       .selectAll()
//       .data(links)
//       .join("line")
//       .attr("stroke-width", (d:any) => Math.sqrt(d.value));

//     const node = svg.append("g")
//       .attr("stroke", "#fff")
//       .attr("stroke-width", 1.5)
//       .selectAll()
//       .data(nodes)
//       .join("circle")
//       .attr("r", 5)
//       .attr("fill", (d:any) => color(d.group));

//     node.append("title")
//     .text((d:any) => d.id);

//     const simulation = d3.forceSimulation(nodes)
//       .force("link", d3.forceLink(links).id((d: any) => d.id))
//       .force("charge", d3.forceManyBody())
//       .force("center", d3.forceCenter(width / 2, height / 2))
//       .on("tick", ticked);

//     // Add a drag behavior.
//     node.call(d3.drag()
//       .on("start", dragstarted)
//       .on("drag", dragged)
//       .on("end", dragended));


//     function ticked() {
//       link
//           .attr("x1", (d:any) => d.source.x)
//           .attr("y1", (d:any) => d.source.y)
//           .attr("x2", (d:any) => d.target.x)
//           .attr("y2", (d:any) => d.target.y);
  
//       node
//           .attr("cx", (d:any) => d.x)
//           .attr("cy", (d:any) => d.y);
//     }

//     function dragstarted(event: any) {
//       if (!event.active) simulation.alphaTarget(0.3).restart();
//       event.subject.fx = event.subject.x;
//       event.subject.fy = event.subject.y;
//     }
  
//     // Update the subject (dragged node) position during drag.
//     function dragged(event: any) {
//       event.subject.fx = event.x;
//       event.subject.fy = event.y;
//     }
  
//     // Restore the target alpha so the simulation cools after dragging ends.
//     // Unfix the subject position now that it’s no longer being dragged.
//     function dragended(event: any) {
//       if (!event.active) simulation.alphaTarget(0);
//         event.subject.fx = null;
//         event.subject.fy = null;
//     }

//     return () => {
//       svg.selectAll("*").remove(); // Clean up the SVG on component unmount or re-render
//     };

//   }, [nodes, links]);




  return (
    <div>
      {/* bg-cover bg-center bg-[url('/confetti.jpg')] */}
        <div id="main-landing-page" className="relative w-full h-screen ">
            {/* <div className="graph-container" ref={graphContainerRef} id="graphContainer">
              <svg></svg>
            </div> */}
            {/* <div className="absolute inset-0 bg-gray-900 opacity-40"></div> */}
            <div className="flex flex-col items-center text-center" style={{'position': 'relative', 'zIndex': '1000'}} >
              <div className="text-6xl font-semibold w-[75%] mt-32">
                  Registration successful ! Your app has been listed 
              </div>

              <div className="text-2xl w-[50%] mt-12">
                  Thank you for registering. An email has been sent to your provided email address. Please check your inbox. 

                  If you don’t see the email, please check your spam folder or resend the email
                        
              </div>

              <button className="p-6 px-36 bg-[#2238FF] rounded-md text-slate-100 mt-24">Proceed</button>
            </div>
        </div>
    </div>
  )
}