import React from 'react'
import './App.css'

function App() {

  //tipagem usando type, ? indica que a propriedade 
  type titleProps = {
    text: string,
    size?: 'small' | 'large'
  }

  
  //definindo valor padrão para a propriedade size
  const Title = ({text, size='large'}: titleProps) => {
    return (
      <h1 style={{fontSize: size == 'small' ? '2rem' : '5rem'}}>{text}</h1>
    )
  }

  type paragraphProps = {
    color: string
  }

  const Paragraph = ({text, size, color} : titleProps & paragraphProps) => {

    return(
      <p style={{fontSize: size == 'small' ? '2rem' : '5rem', color: color}}>{text}</p>
    )
  }

  //tipagem diretamente na prop do componente
  const Count = ({numero} : {numero: number}) => {

    return(
      <p>{numero}</p>
    )

  }

  //tipagem da children, quando a children vem com alguma tag
  const Frase = ({children}:{children: React.ReactNode}) => {

    return(
      <p>{children}</p>
    )
  }

  //objeto simples
  const user = {
    id: 1,
    name: "Raí vaz",
    age: 24,
    isAdmin: true,
    birthDate : new Date("07-04-1998")
  }

  type userAttribute = typeof user;

  //herdando props de um objeto
  const Mary: userAttribute = {
    id: 2,
    name: "Mary",
    age: 28,
    isAdmin: false,
    birthDate: new Date()
  }


  //tipagem variáveis
  let numero: number = 0
  numero = 10

  console.log(numero)

  //Aceitando dois tipos
  let nuOrstr: number | string

  nuOrstr = 0
  nuOrstr= '1'
  console.log("Dois tipos " + nuOrstr)

  //tipagem de array
  let array:[string, number]
  array = ['ok', 1]

  console.log(array[1])

  let array2:number[]
  array2 = [10,20,30,40,50,60]

  array2.forEach(item => {
    console.log(item * 2)
  })


  //tipagem de  objeto
  let obj:{
    name: string, 
    age: number, 
    admin: boolean,
    job?: string
  } = {
    name: "Raí vaz",
    age: 24,
    admin: true
  }

  console.log(obj.name)

  //usando dados enum
  enum size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande" 
  }

  const camisa = {
    nome: "Camisa gola V",
    tamanho : size.M
  }

  console.log(camisa.tamanho)

  //literal types
  //valor imutável
  let varLiteral : "Autenticado" | null
  varLiteral = null
  varLiteral = "Autenticado"

  //FUNÇÕES
                                      //tipando retorno da função
  function soma(num1:number, num2:number):number {
    return num1 + num2
  }

  console.log(soma(12, 10))

  //funções que retorna nenhum valor devem ser tipadas com void
  function sayHello(msg:string): void {
    console.log("Seja bem vindo ao typeScript Sr. " + msg)
  }

  sayHello('Raí vaz de oliveira')

  //argumento opcional
  function greetings(name:string, greet?: string): void {
    if (greet) {
      console.log(`Olá ${name} ${greet}`)
      return
    }

    console.log(`Olá ${name}`)
  }
  
  greetings('Raí', 'Sr')

  //INTERFACES
  interface mathFunctionParams {
    n1: number,
    n2: number
  }

  function suNumbers(numbers: mathFunctionParams) {
    return numbers.n1 + numbers.n2
  }

  console.log(suNumbers({n1:3, n2:8}))

  function multNumbers(numbers: mathFunctionParams) {
    return numbers.n1 * numbers.n2
  }
  
  console.log(multNumbers({n1:3, n2:8}))
  
  const conTypeInterface:mathFunctionParams = {
    n1: 34,
    n2: 22
  }

  console.log(multNumbers(conTypeInterface))

  //narrowing
  //checagem de tipo
  function doSomething(info: number | boolean) {
    if (typeof info === 'number') {
      console.log(`O número é ${info}`)
      return
    }
    console.log("Não é número")
  }

  doSomething(1)
  doSomething(true)

  //GENERICS
  function showArrayItems<T>(array: T[]) {
    array.forEach(item => {
      console.log(`ITEM: ${item}`)
    })
  }

  const arrayNu = [1,2,3,4,5]
  const arrayLe = ['a','b','c','d']

  showArrayItems(arrayLe)
  showArrayItems(arrayNu)

  //classes
  class User {
    name;
    role;
    isApproved;
  

    constructor(name: string, role: string, isApproved: boolean) {
      this.name = name
      this.role = role
      this.isApproved = isApproved
    }

    showUserName(): void {
      console.log(`O nome do usuário é ${this.name}`)
    }

    showRole(canShow: boolean): void{
        if (canShow) {
          console.log(`O usuário é ${this.role}`)
          return
        }

        console.log("Informação restrita")
    }
  
  }


  const user1 = new User("João","Admin", true)  
  user1.showUserName()
  user1.showRole(false)

  //CLASSES COM INTERFACES

  interface Ivehcle {
    brand: string,
    showBrand(): void
  }

  class Car implements Ivehcle {
    brand;
    wheels;

    constructor(brand: string, wheels: number){
      this.brand = brand
      this.wheels = wheels
    }

    showBrand(): void {
      console.log(`A Marca é ${this.brand}`)
    }

  }

  const carro = new Car("Fiat", 4)
  carro.showBrand()

  //HERANÇA
  class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number){
      super(brand, wheels)
      this.engine = engine
    }
  }

  const carS = new SuperCar("Audi", 4, 2.0)
  carS.showBrand()

  return (
    <>

      <Title text='Hello TypeScript' size='small'/>
      <Title text='Com tipo definido'/>

      <Count numero={10}/>
      <Frase>
        Texto do componente <b>frase</b>
      </Frase>
      <Paragraph text='Margin de props' color='red'/>

    </>
  )
}

export default App
