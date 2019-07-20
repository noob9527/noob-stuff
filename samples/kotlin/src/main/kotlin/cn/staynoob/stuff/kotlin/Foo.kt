package cn.staynoob.stuff.kotlin

data class Foo(
    var field1: String,
    var field2: String,
    var field3: String
) {

    data class Bar(
        var field1: String,
        var field2: String,
        var field3: String
    )

    data class Baz(
        var field1: String,
        var field2: String,
        var field3: String
    )

}
