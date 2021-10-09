const displayMoreData = (id) => {
    document.querySelector(`#${CSS.escape(id)}`).classList.toggle('beingClicked');
};

export {displayMoreData}