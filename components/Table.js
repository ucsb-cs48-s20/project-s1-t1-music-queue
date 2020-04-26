function Table(props) {
  return (
    <tr>
      <td>{props.song}</td>
      <td>{props.score}</td>
    </tr>
  );
}

export default Table;
