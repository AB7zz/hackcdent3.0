// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract DeAcc{
    struct Accident {
        string loc;
        string date;
        string time;
        string snapShot;
        string plate;
    }

    struct Insurance {
        string name;
        string policy;
    }

    mapping(uint256 => Accident) public accidents;

    uint256 public numberOfAccidents = 0;

    function addAccident(string memory _loc, string memory _date, string memory _time, string memory _snapShot, string memory _plate) public {
        numberOfAccidents++;
        accidents[numberOfAccidents] = Accident(_loc, _date, _time, _snapShot, _plate);
    }

    function getAccidents() public view returns(Accident[] memory) {
        Accident[] memory _accidents = new Accident[](numberOfAccidents);

        for (uint256 i = 0; i < numberOfAccidents; i++) {
            _accidents[i] = accidents[i];
        }
        return _accidents;
    }

    function getAccident(uint256 _id) public view returns(string memory, string memory, string memory, string memory, string memory) {
        return (accidents[_id].loc, accidents[_id].date, accidents[_id].time, accidents[_id].snapShot, accidents[_id].plate);
    }

    function getNumberOfAccidents() public view returns(uint256) {
        return numberOfAccidents;
    }
}