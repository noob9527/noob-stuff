package cn.staynoob.stuff.kotlin.immutable

import org.junit.jupiter.api.Test

class SampleTest {
    @Test
    fun test100() {
        val sample1 = Sample(
            field1 = "",
            field2 = true,
            field3 = 0,
            field4 = 0f,
            field5 = 0.0
        )
        val sample2 = Sample(field2 = true)
    }
}