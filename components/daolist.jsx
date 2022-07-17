import Link from 'next/link'
import React, { Fragment } from 'react'

const Daolist = () => {

    const daos = [
        {
            id: "1",
            name: "Buildspace",
            address: "0xAF323423BC89809C909E9090"
        },
        {
            id: "2",
            name: "Conventry",
            address: "0x24524ae089809f2323314113"
        },
        {
            id: "3",
            name: "Carillus",
            address: "0x324297a9809e908090990a90"
        },
        {
            id: "4",
            name: "Web3Bridge",
            address: "0x238992732e72398a98723893"
        },
        {
            id: "5",
            name: "Serillina",
            address: "0x2347689238ae098234234234"
        }
    ]

  return (
    <Fragment>
        <div className="list">

            <div className="list-head">
                <div>S/N</div>
                <div>DAO</div>
                <div>Address</div>
            </div>

            {daos.map(dao => {
                return (
                    <Link href={`${1}`}>
                        <a className='list-data' key={dao.id}>
                            <div>{dao.id}</div>
                            <div>{dao.name}</div>
                            <div>{dao.address}</div>
                        </a>
                    </Link>
                )
            })}
        </div>
    </Fragment>
  )
}

export default Daolist