package cn.staynoob.stuff.kotlin.variance

interface BiDirection<T> : Consumer<T>, Producer<T>

fun <T> produce(t: T, param: BiDirection<out T>) {
    // correct
    val res: T = param.produce()
    // doesn't compile
//    param.consume(t)
}

fun <T> consume(t: T, param: BiDirection<in T>) {
    // correct
    param.consume(t)
    // doesn't compile
//    val res: T = param.produce()
}
