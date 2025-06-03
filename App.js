
const parent = React.createElement("div", { id: "parent" },
     React.createElement("div", { id: "child" },
        [React.createElement("h1", { style: { color: "green" } }, "I'm an h1 tag!"), 
            React.createElement("h2", { style: { color: "grey" } }, "I'm a h2 tag- sibling to h1!")
        ]
        )
    );
const r = ReactDOM.createRoot(document.getElementById("root"));
r.render(parent);