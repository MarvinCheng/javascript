const node = `
<div class="parent">
	<div class="1">
		<div class="1-1">
			<div class="1-1-1">a</div>	
		</div>
		<div class="1-2">
			<div class="1-2-1">b</div>	
		</div>
		<div class="1-2">
			c	
		</div>
	</div>
	<div class="2">
		<div class="2-1">
			d
		</div>
		<div class="2-2">
			e
		</div>
	</div>
	<div class="3">
		<div class="3-1">
			f
		</div>
		<div class="3-2">
			g
		</div>
	</div>
</div>
`;

const nodes = {
	name: "parent",
	children: [
		{
			name: 1,
			children: [
				{
					name: 1.1,
					children: [
						{
							name: '1.1.1',
							value: 'a',
							children: [],
						},
					],
				},
				{
					name: 1.2,
					children: [
						{
							name: '1.2.1',
							value: 'b',
							children: [],
						},
					],
				},
			],
		},
		{
			name: 2,
			children: [
				{
					name: 2.1,
					value: 'c',
					children: [
					],
				},
				{
					name: 2.2,
					value: 'd',
					children: [
					],
				},
			],
		},
		{
			name: 3,
			children: [
				{
					name: 3.1,
					value: 'e',
					children: [
					],
				},
				{
					name: 3.2,
					value: 'f',
					children: [
					],
				},
			],
		}
	],
};

const depthFirst = (node, nodeList = []) => {
	nodeList.push(node);
	const children = node.children;
	children.forEach(n => {
		depthFirst(n, nodeList);
	});
	return nodeList;
};

console.log(depthFirst(nodes));

const breadthFirst = (node) => {
	const nodes = [];
	const stack = [];
	stack.push(node);
	while(stack.length){
		const item = stack.shift();
		nodes.push(item);
		const children = item.children;
		children.forEach(n => {
			stack.push(n);
		});
	}
	return nodes;
};


console.log(breadthFirst(nodes));
