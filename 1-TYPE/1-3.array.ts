{
    //Array object의 불변성을 보장하지 위해 readonly 사용, readonly 사용시에는 Array <number> 의 형식으로 타입을 정할 수 없음. 
    // 따라서, string[] 을 쓰는 것을 권장함.
    const fruits: string[] = ['a', 'b', 'c'];
    const scores: Array<number> = [1,3,4];
    function printArray(fruits: readonly string[]) {

    }

    //Tuple : 서로다른 타입을 함께 가질 수 있는 배열. --> interface, type alias, class 
    let student: [string, number];
    const [name, age] = amuna;
}