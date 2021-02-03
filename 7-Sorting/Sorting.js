function sortList(sortBy, list) {
    return list.sort((l, r) => {
        if (l[sortBy] > r[sortBy]) return -1;
        if (l[sortBy] < r[sortBy]) return 1;
        return 0;
    });
}