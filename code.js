function augmentingPath(graph, start, end) {
    ans = augmentingPath2(graph, start, end)
    if(ans[0] != -1)
        return ans
    return []
}

function augmentingPath2(graph, start, end) {
    let cha = graph
    cha[start].v = "v"
    const ke = Object.keys(graph[start])
    if(start == end){
        return [end];
    }
    for(let n = 0; n < ke.length-1; n++){
        if(cha[ke[n]]['v'] != "v"){
            a = [start].concat(augmentingPath2(cha, ke[n], end))
            if(a[a.length-1] != -1){
                return a}
            a.pop()
        }
    }
    return [-1];
}
