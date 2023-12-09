import useJsonFetch from './hook';

function RequestHook(props) {

  const [data, error, loading] = useJsonFetch(props.url, props.opt);

  return (
    <div>
      <div style={{color:'green'}}>запрос {props.url}</div>
      <div>data: {JSON.stringify(data)}</div>
      <div>error: {error?.toString()}</div>
      <div>loading: {loading?.toString() }</div>
    </div>
  );
}
export  default RequestHook