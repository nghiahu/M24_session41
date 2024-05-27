import React from 'react'

export default function Bt10() {
  return (
    <>Bài tập 10
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">Username</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500" placeholder="Enter username"/>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500" placeholder="Enter password"
          />
          <small className="text-gray-500">Your password is between 4 and 12 characters</small>
        </div>

        <div className="mb-4">
          <label htmlFor="inputText" className="block text-gray-700">Input Text Label</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-red-500 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500" placeholder="Typing |"/>
          <p className="mt-2 text-sm text-red-600">Error message informing me of a problem</p>
        </div>

        <div className="mb-4">
          <div className="block text-gray-700">Remember me</div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600" />
            <span className="ml-2">Remember me</span>
          </label>
        </div>

        <div className="mb-4 flex flex-col">
            <div>
          <label className="inline-flex items-center">
            <input type="radio" className="form-radio h-4 w-4 text-purple-600"/>
            <span className="ml-2">Radio selection 1</span>
          </label></div>
          <div>
          <label className="inline-flex items-center ">
            <input type="radio" className="form-radio h-4 w-4 text-purple-600"/>
            <span className="ml-2">Radio selection 2</span>
          </label></div>
          <div>
          <label className="inline-flex items-center ">
            <input type="radio" className="form-radio h-4 w-4 text-purple-600"/>
            <span className="ml-2">Radio selection 3</span>
          </label></div>
        </div>

        <div className="mb-4">
          <label htmlFor="dropdown" className="block text-gray-700">Dropdown Title</label>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          >
            <option >Dropdown option</option>
            <option >Dropdown option 1</option>
            <option >Dropdown option 2</option>
          </select>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button type="submit"className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">Next</button>
        </div>
      </form>
    </div>
    </>
  )
}
