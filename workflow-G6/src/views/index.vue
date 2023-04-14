<template>
    <div>
        <div ref="canvas"></div>
        <button @click="addNode">Add Node</button>
    </div>
</template>

ekkoJ:
<template>
    <div ref="canvas"></div>
    <button @click="addNode">Add Node</button>
</template>

<script>
export default {
    mounted() {
        this.initGraph();
    },
    methods: {
        initGraph() {
            this.graph = new G6.Graph({
                container: this.$refs.canvas,
                width: 800,
                height: 600,
                modes: {
                    default: ['drag-canvas',
                        'drag-node'
                    ]
                },
                defaultNode: {
                    shape: 'circle',
                    size: [50],
                    style: {
                        fill: '#C6E5FF',
                        stroke: '#5B8FF9'
                    }
                },
                nodeStateStyles: {
                    hover: {
                        fill: '#91D5FF',
                        stroke: '#1890FF'
                    }
                }
            });
            this.graph.data({
                nodes: [{ id: 'node1', x: 100, y: 100 },
                { id: 'node2', x: 300, y: 100 }
                ],
                edges: [{ source: 'node1', target: 'node2' }
                ]
            });
            this.graph.render();
        },
        addNode() {
            const id = `node${this.graph.getNodes().length + 1}`;
            const x = Math.random() * 600 + 100;
            const y = Math.random() * 400 + 100;
            this.graph.addItem('node', { id, x, y });
        }
    }
}
</script>

<style>
.g6-component-tooltip {
    display: none;
}
</style>
