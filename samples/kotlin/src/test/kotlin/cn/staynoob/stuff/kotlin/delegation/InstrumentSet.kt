package cn.staynoob.stuff.kotlin.delegation

class InstrumentSet<T>(
    private val set: MutableSet<T>
) : MutableSet<T> by set {

    var addCount = 0
        private set

    override fun add(element: T): Boolean {
        addCount++
        return set.add(element)
    }

    override fun addAll(elements: Collection<T>): Boolean {
        addCount += elements.size
        return set.addAll(elements)
    }

}