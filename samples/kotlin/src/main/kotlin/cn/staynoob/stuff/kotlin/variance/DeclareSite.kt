package cn.staynoob.stuff.kotlin.variance

interface Consumer<in T> {
    fun consume(obj: T)
}

interface Producer<out T> {
    fun produce(): T
}
