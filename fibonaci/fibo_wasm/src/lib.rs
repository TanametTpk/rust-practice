
#[no_mangle]
pub fn fibo(n:i32) -> i32 {

    let mut fibo_num: [i32; 3] = [0, 1, 1];

    if n < 1 {
        return 0;
    }
    if n < 4 {
        let result: i32 = fibo_num[(n - 1) as usize];
        return result
    }

    let max_num = n - 3;
    for _i in 0..max_num {
        
        let next_number = fibo_num[1] + fibo_num[2];
        fibo_num[0] = fibo_num[1];
        fibo_num[1] = fibo_num[2];
        fibo_num[2] = next_number;

    }

    return fibo_num[2];

}