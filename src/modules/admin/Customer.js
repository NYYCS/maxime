const Field = ({label, data}) => {
  return (
    <span className="flex flex-col">
      <div className="flex text-sm text-gray-500">{label}</div>
      <div className="flex">{data}</div>
    </span>
  )
}

const Customer = ({ user }) => {
  return (
    <div className="flex flex-row w-full p-4 mb-4 bg-white border rounded last:mb-0">
      <span className="flex flex-row gap-4">
        {Object.entries(user).map(([key, value], index) => {
          return <Field key={index} label={key} data={value}/>
        })}
      </span>
    </div>
  )
}

export default Customer;