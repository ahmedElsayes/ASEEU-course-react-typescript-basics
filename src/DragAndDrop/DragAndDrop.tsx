import React, { createRef, useState } from "react";
import "./styles.css";
import { TouchDragImage } from "./TouchDragImage";

interface ElementPosProp {
  offsetX: number;
  offsetY: number;
}
export default function DragAndDrop() {
  const dropzoneRef = createRef<HTMLDivElement>();
  const [dropZoneId, setDropZoneId] = useState("");
  const [draggedElId, setDraggedElId] = useState("");
  const [elementInitPos, setElementInitPos] = useState<ElementPosProp | null>(null);
  const [touchCoordinates, setTouchCoordinates] = useState<number[] | null>(null);
  const [draggedElement, setDraggedElement] = useState<Node | null>(null);

  // const onTouchMove = (e: TouchEvent<HTMLButtonElement>) => {
  //   console.log("dragged element in move, element id: ", e.currentTarget.id);
  //   if (e && e.changedTouches && e.changedTouches.length > 0) {
  //     const currentDraggedOverEl = document.elementFromPoint(
  //       e.changedTouches[0].clientX,
  //       e.changedTouches[0].clientY
  //     );
  //     if (currentDraggedOverEl?.id) {
  //       setDropZoneId(currentDraggedOverEl?.id);
  //       setTouchCoordinates([e.targetTouches[0].pageX, e.targetTouches[0].pageY]);
  //     }
  //     console.log(
  //       "currentDraggedOverEl id: ",
  //       currentDraggedOverEl?.parentElement?.id,
  //       currentDraggedOverEl?.id
  //     );
  //   }
  //   console.log("touchCoordinates: ", touchCoordinates);
  // };
  // const onTouchStart = (e: any) => {
  //   setDraggedElId(e.currentTarget.id);
  //   setElementInitPos({
  //     offsetX: e.targetTouches[0].pageX,
  //     offsetY: e.targetTouches[0].pageY,
  //   });
  // };
  const onElementDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("onDrop element id: ", e.currentTarget.id);
    const nodeCopy = draggedElement?.cloneNode(true);
    nodeCopy && dropzoneRef.current?.appendChild(nodeCopy);
    setDropZoneId("");
  };

  return (
    <div className="row justify-content-center align-items-center mt-5 drag_drop_page">
      <div className="col-md-3 col-sm-12 relative">
        <p>Area for dragging items</p>
        <button
          draggable
          id="drag_button"
          className="special-button"
          // onTouchStart={(e) => {
          //   setDraggedElId(e.currentTarget.id);
          // }}
          // onTouchMove={onTouchMove}
          onDragEnter={(e) => {
            //trigger value once
            console.log("onDragEnter (dragged-element) id: ", e.currentTarget.id);
            const copiedElem = e.currentTarget;
            setDraggedElement(copiedElem);
          }}
          onDragEnd={(e) => {
            //trigger value once
            console.log("onDragEnd (dragged-element) id: ", e.currentTarget.id);
            setDraggedElement(null);
          }}
          onDragCapture={(e) => {
            // keep capture values
            // console.log(e.clientX, e.clientY);
          }}
        >
          comments
        </button>
      </div>
      <div className="col-md-6 col-sm-12">
        <div
          className={`drop-container el1 ${dropZoneId === "0" ? "activezone" : ""}`}
          id="0"
          ref={dropzoneRef}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={(e) => {
            console.log("onDragOverEnter element id: ", e.currentTarget.id);
            e.stopPropagation();
            setDropZoneId(e.currentTarget.id);
          }}
          onDragLeave={(e) => {
            console.log("onDragOverLeave element id: ", e.currentTarget.id);
            e.stopPropagation();
            setDropZoneId("");
          }}
          onDrop={onElementDrop}
        >
          First Area for dropping
          <div className={`drop-container el2 ${dropZoneId === "1" ? "activezone" : ""}`} id="1">
            Second Area for dropping
            <div className={`drop-container el3 ${dropZoneId === "2" ? "activezone" : ""}`} id="2">
              Third Area for dropping
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
