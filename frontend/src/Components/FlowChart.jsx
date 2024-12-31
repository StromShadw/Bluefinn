import React, { useState } from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'react-flow-renderer';

const initialElements = [
  { id: '1', type: 'input', data: { label: 'Compliance Group' }, position: { x: 250, y: 5 } },
  { id: '2', data: { label: 'Finance' }, position: { x: 150, y: 100 } },
  { id: '3', data: { label: 'Human Capital' }, position: { x: 350, y: 100 } },
  { id: '4', data: { label: 'Compliance' }, position: { x: 50, y: 200 } },
  { id: '5', data: { label: 'Accounting & Financial' }, position: { x: 150, y: 200 } },
  { id: '6', data: { label: 'Budgeting & Reporting' }, position: { x: 250, y: 200 } },
  { id: '7', data: { label: 'Learning & Development' }, position: { x: 350, y: 200 } },
  { id: '8', data: { label: 'Rewards, Performance' }, position: { x: 450, y: 200 } },
  { id: '9', data: { label: 'Talent Acquisition' }, position: { x: 550, y: 200 } },

  // Edges
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
  { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
  { id: 'e2-4', source: '2', target: '4', type: 'smoothstep' },
  { id: 'e2-5', source: '2', target: '5', type: 'smoothstep' },
  { id: 'e2-6', source: '2', target: '6', type: 'smoothstep' },
  { id: 'e3-7', source: '3', target: '7', type: 'smoothstep' },
  { id: 'e3-8', source: '3', target: '8', type: 'smoothstep' },
  { id: 'e3-9', source: '3', target: '9', type: 'smoothstep' },
];

const FlowChart = () => {
  const [elements] = useState(initialElements);

  const nodeStyles = {
    background: '#fff',
    color: '#333',
    border: '1px solid #222138',
    width: 180,
    borderRadius: '3px',
  };

  const minimapStyle = {
    height: 120,
    backgroundColor: '#f8f8f8',
  };

  return (
    <div style={{ height: '600px', width: '100%' }}>
      <ReactFlow
        elements={elements}
        nodesDraggable={true}
        nodesConnectable={true}
        nodeTypes={nodeStyles}
        snapToGrid={true}
        snapGrid={[15, 15]}
      >
        <Controls />
        <MiniMap
          style={minimapStyle}
          nodeStrokeColor={(n) => {
            return n.style?.background || '#eee';
          }}
          nodeColor={(n) => {
            return n.style?.background || '#fff';
          }}
        />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default FlowChart;
