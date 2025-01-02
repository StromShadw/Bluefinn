import { useState, useEffect } from "react";
import ReactFlow, { Background, Controls } from "react-flow-renderer";

const transformDataToElements = (data) => {
  const elements = [];
  const calculatePosition = (level, index) => ({ x: index * 200, y: level * 150 });

  // Create nodes
  data.forEach((item, index) => {
    elements.push({
      id: item.id,
      data: { label: <strong>{item.name}</strong> },
      position: calculatePosition(item.level || 0, index),
    });
  });

  // Create edges
  data.forEach((item) => {
    if (item.parent) {
      elements.push({
        id: `e${item.parent}-${item.id}`,
        source: item.parent,
        target: item.id,
        animated: true,
        style: { stroke: "#007BFF", strokeWidth: 2 },
      });
    }
  });

  return elements;
};

const Map = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Mock API response
    const apiData = [
      { id: "1", name: "Finance", type: "Division", parent: null, level: 0 },
      { id: "1.1", name: "Accounting & Financial", type: "Department", parent: "1", level: 1 },
      { id: "1.1.1", name: "Financial Accounting", type: "Team", parent: "1.1", level: 2 },
      { id: "2", name: "Operations", type: "Division", parent: null, level: 0 },
      { id: "2.1", name: "Accounts Maintenance Unit - WBG", type: "Department", parent: "2", level: 1 },
      { id: "2.1.1", name: "Business Support", type: "Team", parent: "2.1", level: 2 },
    ];

    const transformedElements = transformDataToElements(apiData);
    setElements(transformedElements);
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <ReactFlow elements={elements} fitView>
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default Map;
