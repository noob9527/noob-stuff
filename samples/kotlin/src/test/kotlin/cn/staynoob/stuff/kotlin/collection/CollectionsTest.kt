package cn.staynoob.stuff.kotlin.collection

import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Fail.fail
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import java.util.*

internal class CollectionsTest {

    private lateinit var employees: List<Employee>

    class Employee(
        var name: String,
        var department: String,
        var salary: Int
    ) {
        var displayOrder: Int = 0
    }

    @BeforeEach
    fun setUp() {
        this.employees = Arrays.asList(
            Employee("foo", "IT", 1000),
            Employee("bar", "IT", 2000),
            Employee("baz", "HR", 3000),
            Employee("qux", "HR", 4000)
        )
    }

    private fun mapIndexed(employees: List<Employee>): List<Employee> {
        fail("Not yet implemented")
        return emptyList()
    }

    @Test
    @DisplayName("mapIndexed")
    fun test100() {
        val res = mapIndexed(this.employees)
        assertThat(res).hasSameSizeAs(this.employees)
        assertThat(res).allMatch { e -> e.displayOrder > 0 }
    }

    /**
     * should return mapOf(`department` to `max salary`)
     */
    private fun groupBy(employees: List<Employee>): Map<String, Int> {
        fail("Not yet implemented")
        return emptyMap()
    }

    /**
     * expect mapOf(`department` to `max salary`)
     */
    @Test
    @DisplayName("groupBy")
    fun test300() {
        val expected = HashMap<String, Int>()
        expected["IT"] = 2000
        expected["HR"] = 4000

        val res = groupBy(this.employees)

        assertThat(res).isEqualTo(expected)
    }

}
